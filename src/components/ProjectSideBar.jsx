/** @format */

export default function ProjectSideBar() {


  return (
    <>
      <div className="ProjectSideBar">
        <h4>SUBSCRIPTION</h4>
        <label>
          <input type="checkbox" /> Free
        </label>
        <label>
          <br />
          <input type="checkbox" /> Premium
        </label>
        <h4>ACTIVITY TYPE</h4>
        <label>
          <input type="checkbox" checked="checked" /> Animation
        </label>
        <br />
        <label>
          <input type="checkbox" /> Game
        </label>
        <br />
        <label>
          <input type="checkbox" /> Chatbot
        </label>
        <br />
        <label>
          <input type="checkbox" /> Augmented Reality
        </label>
        <br />
        <h4>YEAR LEVEL </h4>
        <label>
          <input type="checkbox" checked="checked" /> 1-4
        </label>
        <br />
        <label>
          <input type="checkbox" checked="checked" /> 5-6
        </label>
        <br />{" "}
        <label>
          <input type="checkbox" /> 7-8
        </label>
        <br />
        <label>
          <input type="checkbox" /> 9-13
        </label>
        <br />
        <h4>SUBJECT MATTER</h4>
        <label>
          <input type="checkbox" checked="checked" /> Computer Science
        </label>
        <br />
        <label>
          <input type="checkbox" />
          Maths
        </label>
        <br />
        <label>
          <input type="checkbox" /> Science
        </label>
        <br />
        <label>
          <input type="checkbox" /> Language
        </label>
        <br />
        <label>
          <input type="checkbox" /> Art
        </label>
        <br />
        <label>
          <input type="checkbox" /> Music
        </label>
      </div>
    </>
  );
}
