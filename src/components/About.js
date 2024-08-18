import React from "react";

export default function About(props) {
  return (
    <div className="container my-4" style={{ backgroundColor: props.Mode === "light" ? "white" : "#2C3E50", color: props.Mode === "light" ? "black" : "white" }}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              data-bs-toggle="collapse"
              style={{
                backgroundColor: props.Mode === "light" ? "white" : "#2C3E50", // dark greyish blue
                color: props.Mode === "light" ? "black" : "white",
              }}
            >
              Creator
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.Mode === "light" ? "white" : "#2C3E50", // dark greyish blue
                color: props.Mode === "light" ? "black" : "white",
              }}
            >
              Saad Khan is an aspiring developer embarking on his journey in the
              world of React development.
              <br />
              With a passion for coding and a dedication to continuous learning,
              Saad is committed to honing his skills and mastering the
              intricacies of modern web development.
              <br />
              <br />
              This project marks Saad's first venture into React, showcasing his
              ability to integrate new technologies and frameworks into his
              skillset.
              <br />
              Although this project may be a small step, it represents a
              significant milestone in Saad's path toward becoming a proficient
              React developer.
              <br />
              <br />
              Saad understands that every great developer starts with the
              basics, and he is eager to build upon this foundation.
              <br />
              With each project, he aims to challenge himself, explore
              innovative solutions, and contribute to the ever-evolving tech
              community.
              <br />
              <br />
              Follow Saad's journey as he navigates the exciting landscape of
              web development, continually striving for excellence and making
              strides towards his goal of becoming a top-notch React developer.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.Mode === "light" ? "white" : "#2C3E50", // dark greyish blue
            color: props.Mode === "light" ? "black" : "white"
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.Mode === "light" ? "white" : "#2C3E50", // dark greyish blue
                color: props.Mode === "light" ? "black" : "white",
              }}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.Mode === "light" ? "white" : "#2C3E50", // dark greyish blue
                color: props.Mode === "light" ? "black" : "white",
              }}
            >
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.Mode === "light" ? "white" : "#2C3E50", // dark greyish blue
                color: props.Mode === "light" ? "black" : "white",
              }}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.Mode === "light" ? "white" : "#2C3E50", // dark greyish blue
                color: props.Mode === "light" ? "black" : "white", 
              }}
            >
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
