import { Link } from "react-router-dom";
import bg from "/bg.jpg";
function Home() {
  return (
    <>
      <div
        className=""
        style={{ height: "100vh", backgroundImage: `URL(${bg})` }}
      >
        <div className="container-sm m-auto h-100 row gap-5">
          <div className="col-4 d-flex justify-content-center align-items-center text-center text-white">
            <div>
              <h2>Conference Expense Planner</h2>
              <p>Plan your next major event with us!</p>
              <Link to={"/Selection"} className="btn btn-warning">
                Get Started
              </Link>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center text-justify text-white">
            <div>
              <p>
                Welcome to BudgetEase Solutions, your trusted partner in
                simplifying management and financial solutions. At BudgetEase,
                we understand the importance of effective budget planning and
                strive to provide intuitive, user-friendly solutions to meet the
                diverse needs of our clients{" "}
              </p>
              <p>
                With a commitment to efficiency and innovations, we empower
                individuals and businesses to take control of their finances and
                achieve their goals with ease.
              </p>
              <p>
                At BudgetEasy Solutions, our mission is to make budgeting
                effortless and accessible for everyone. Whether you're a small
                business owner, a busy professional, or an individual looking to
                manage your personal finances, we offer tailored solutions to
                streamline your budgeting process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
