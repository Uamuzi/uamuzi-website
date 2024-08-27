import React from "react"

function TeamMember({ imageUrl, fullName, position, linkedinUsername }) {
  return (
    <div className="team-inner m-0 p-0 position-relative py-4 ">
      <div
        className="team-member-image position-relative"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="long-purple-line position-absolute"></div>
        <div className="short-grey-line position-absolute"></div>
      </div>
      <div className="team-member-info text-center py-2">
        <p className="text-capitalize fw-bold" style={{ marginBottom: "10px" }}>
          {fullName}
        </p>
        <p
          className="primary-color text-capitalize"
          style={{ marginBottom: "10px" }}
        >
          {position}
        </p>

        <span
          className="primary-color"
          style={{ marginTop: "10px", marginBottom: "50px" }}
        >
          <a
            href={`https://www.linkedin.com/in/${linkedinUsername}`}
            target="_blank"
          >
            <box-icon
              name="linkedin-square"
              type="logo"
              color="#8067AD"
            ></box-icon>
          </a>
        </span>
      </div>
    </div>
  )
}

export default TeamMember
