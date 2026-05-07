import { useState } from "react";

const Notes = (e) => {
  const [notesHeading, setNotesHeading] = useState("");
  const [notesdetails, setNotesdetails] = useState("");
  const [task, setTask] = useState(() => {
    const storedTasks = localStorage.getItem("task");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = [...task];

    newTask.push({ notesHeading, notesdetails });

    setTask(newTask);

    localStorage.setItem("task", JSON.stringify([...newTask]));

    setNotesHeading("");
    setNotesdetails("");
  };

  const deleteNote = (idx) => {
    const allNotes = [...task];
    allNotes.splice(idx, 1);
    setTask(allNotes);
  };

  return (
    <>
      <h1 className="text-[70px] font-bold text-center uppercase text-white">
        Notes App
      </h1>
      <div className="ele-form h-ful w-full p-[100px] lg:flex justify-between text-white gap-[100px]">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="lg:flex-col gap-4 lg:flex lg:w-1/2"
        >
          <input
            value={notesHeading}
            onChange={(e) => {
              setNotesHeading(e.target.value);
            }}
            type="text"
            placeholder="Enter Notes Heading"
            className="border-2 p-4 outline-0"
          />
          <textarea
            value={notesdetails}
            onChange={(e) => {
              setNotesdetails(e.target.value);
            }}
            id="details"
            placeholder="Write Details"
            className="p-4 border-2 outline-0 h-40"
          ></textarea>
          <button type="submit" className="bg-white text-black p-2 outline-0">
            Add Notes
          </button>
        </form>
        <div className="divider h-screen bg-[#e3e3e329] w-[2px]"></div>
        <div className="notes-div min-h-screen lg:w-1/2">
          <h1 className="title text-4xl text-white mb-6 font-bold">
            Recent Notes
          </h1>
          <div className="notes-container flex flex-wrap gap-4">
            {task.map((e, idx) => {
              return (
                <div
                  key={idx}
                  className="note h-[300px] w-[200px] bg-white text-black rounded-2xl p-[20px] relative"
                >
                  <h3 className="note-title text-[24px] font-bold ">
                    {e.notesHeading}
                  </h3>
                  <p className="note-detail text-[18px] text-[#666]">
                    {e.notesdetails}
                  </p>
                  <button
                    onClick={(f) => {
                      deleteNote(idx);
                    }}
                    className="bg-red-500 text-white font-bold p-[4px] rounded text-[12px] absolute top-[10px] right-[10px]"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Notes;
