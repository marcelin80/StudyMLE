import { useMemo, useState } from "react";
import { getTrack, tracks, type TrackId } from "./data";
import "./App.css";

type View =
  | { name: "home" }
  | { name: "track"; id: TrackId }
  | { name: "lesson"; id: TrackId; lessonId: string }
  | { name: "quiz"; id: TrackId };

const STORAGE_KEY = "studymle-progress";

function loadProgress(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: Record<string, boolean>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function App() {
  const [view, setView] = useState<View>({ name: "home" });
  const [progress, setProgress] = useState<Record<string, boolean>>(loadProgress);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const markComplete = (key: string) => {
    setProgress((current) => {
      const next = { ...current, [key]: true };
      saveProgress(next);
      return next;
    });
  };

  const completedCount = Object.values(progress).filter(Boolean).length;

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="mark">
          <div className="mark-badge">S</div>
          <div>
            <h1>StudyMLE</h1>
            <p>Machine learning, practiced</p>
          </div>
        </div>
        <nav className="nav">
          <button
            className={view.name === "home" ? "active" : ""}
            onClick={() => setView({ name: "home" })}
          >
            Studio
          </button>
          {tracks.map((track) => (
            <button
              key={track.id}
              className={view.name !== "home" && view.id === track.id ? "active" : ""}
              onClick={() => setView({ name: "track", id: track.id })}
            >
              {track.title}
            </button>
          ))}
        </nav>
        <div className="sidebar-foot">{completedCount} lessons and drills marked done</div>
      </aside>
      <main className="main">
        {view.name === "home" && <Home onOpen={(id) => setView({ name: "track", id })} progress={progress} />}
        {view.name === "track" && (
          <TrackView
            id={view.id}
            progress={progress}
            onLesson={(lessonId) => setView({ name: "lesson", id: view.id, lessonId })}
            onQuiz={() => setView({ name: "quiz", id: view.id })}
            onBack={() => setView({ name: "home" })}
          />
        )}
        {view.name === "lesson" && (
          <LessonView
            id={view.id}
            lessonId={view.lessonId}
            done={Boolean(progress[`${view.id}:${view.lessonId}`])}
            onComplete={() => markComplete(`${view.id}:${view.lessonId}`)}
            onBack={() => setView({ name: "track", id: view.id })}
          />
        )}
        {view.name === "quiz" && (
          <QuizView
            id={view.id}
            answers={answers}
            onAnswer={(questionId, choice) =>
              setAnswers((current) => ({ ...current, [questionId]: choice }))
            }
            onComplete={() => markComplete(`${view.id}:quiz`)}
            onBack={() => setView({ name: "track", id: view.id })}
          />
        )}
      </main>
    </div>
  );
}

function Home({
  onOpen,
  progress,
}: {
  onOpen: (id: TrackId) => void;
  progress: Record<string, boolean>;
}) {
  return (
    <section className="hero">
      <p className="kicker">Development environment ready</p>
      <h2>A quiet studio for machine learning engineering.</h2>
      <p className="lede">
        Three short tracks cover the models, the production path, and the probability
        that show up in real reviews. Open a track, read a lesson, then take the drill.
      </p>
      <div className="grid">
        {tracks.map((track) => {
          const total = track.lessons.length + 1;
          const done =
            track.lessons.filter((lesson) => progress[`${track.id}:${lesson.id}`]).length +
            (progress[`${track.id}:quiz`] ? 1 : 0);
          return (
            <button key={track.id} className="card" onClick={() => onOpen(track.id)}>
              <span>{track.label}</span>
              <h3>{track.title}</h3>
              <p>{track.blurb}</p>
              <div className="progress" aria-hidden="true">
                <i style={{ width: `${(done / total) * 100}%` }} />
              </div>
              <small>
                {done}/{total} complete
              </small>
            </button>
          );
        })}
      </div>
      <div className="status">
        Local Vite server on port 5173. Progress is stored in this browser only.
      </div>
    </section>
  );
}

function TrackView({
  id,
  progress,
  onLesson,
  onQuiz,
  onBack,
}: {
  id: TrackId;
  progress: Record<string, boolean>;
  onLesson: (lessonId: string) => void;
  onQuiz: () => void;
  onBack: () => void;
}) {
  const track = getTrack(id);
  return (
    <section className="panel">
      <button className="back" onClick={onBack}>
        Back to studio
      </button>
      <p className="kicker">{track.label}</p>
      <h2>{track.title}</h2>
      <p>{track.blurb}</p>
      <div className="lessons">
        {track.lessons.map((lesson) => (
          <button key={lesson.id} onClick={() => onLesson(lesson.id)}>
            <span>
              <strong>{lesson.title}</strong>
              <br />
              {lesson.summary}
            </span>
            <span>
              {lesson.minutes} min
              {progress[`${id}:${lesson.id}`] ? " · done" : ""}
            </span>
          </button>
        ))}
        <button onClick={onQuiz}>
          <span>
            <strong>Drill</strong>
            <br />
            Two questions to check that the ideas stuck.
          </span>
          <span>{progress[`${id}:quiz`] ? "done" : "open"}</span>
        </button>
      </div>
    </section>
  );
}

function LessonView({
  id,
  lessonId,
  done,
  onComplete,
  onBack,
}: {
  id: TrackId;
  lessonId: string;
  done: boolean;
  onComplete: () => void;
  onBack: () => void;
}) {
  const track = getTrack(id);
  const lesson = track.lessons.find((item) => item.id === lessonId);
  if (!lesson) {
    return null;
  }

  return (
    <article className="lesson">
      <button className="back" onClick={onBack}>
        Back to {track.title}
      </button>
      <p className="kicker">{track.label}</p>
      <h2>{lesson.title}</h2>
      <p>{lesson.summary}</p>
      <ul className="notes">
        {lesson.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
      <div className="lessons">
        <button onClick={onComplete}>{done ? "Marked complete" : "Mark lesson complete"}</button>
      </div>
    </article>
  );
}

function QuizView({
  id,
  answers,
  onAnswer,
  onComplete,
  onBack,
}: {
  id: TrackId;
  answers: Record<string, number>;
  onAnswer: (questionId: string, choice: number) => void;
  onComplete: () => void;
  onBack: () => void;
}) {
  const track = getTrack(id);
  const score = useMemo(() => {
    return track.quiz.filter((question) => answers[question.id] === question.answer).length;
  }, [answers, track.quiz]);
  const finished = track.quiz.every((question) => answers[question.id] !== undefined);

  return (
    <section className="panel">
      <button className="back" onClick={onBack}>
        Back to {track.title}
      </button>
      <p className="kicker">Drill</p>
      <h2>{track.title}</h2>
      {track.quiz.map((question, index) => {
        const chosen = answers[question.id];
        return (
          <div key={question.id} className="lesson">
            <p className="kicker">Question {index + 1}</p>
            <h3>{question.prompt}</h3>
            {question.choices.map((choice, choiceIndex) => {
              const selected = chosen === choiceIndex;
              const correct = selected && choiceIndex === question.answer;
              const wrong = selected && choiceIndex !== question.answer;
              return (
                <button
                  key={choice}
                  className={`choice${correct ? " correct" : ""}${wrong ? " wrong" : ""}`}
                  onClick={() => onAnswer(question.id, choiceIndex)}
                >
                  {choice}
                </button>
              );
            })}
            {chosen !== undefined && <p className="explain">{question.explain}</p>}
          </div>
        );
      })}
      {finished && (
        <div className="status">
          Score {score}/{track.quiz.length}.{" "}
          <button className="back" onClick={onComplete}>
            Save this drill
          </button>
        </div>
      )}
    </section>
  );
}
