"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="reg-section">
        <div className="reg-desc">
          <h2 className="reg-desc-1">Department of</h2>
          <h2 className="reg-desc-2">Information Technology</h2>
          <h2 className="reg-desc-3">Organizes</h2>
        </div>
        <p className="name">
          <span>FLINT</span>'23
        </p>
        <p className="date">
          <Image
            src={"/assets/calender.svg"}
            height={30}
            width={30}
            alt="calender"
          />
          October 9 2023
        </p>
        <a
          className="reg-link"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSde96mzBrIpz4Gtx0qvYVKZK9VSL6JROfvTsR8pO_z6nIRKrw/viewform?pli=1"
        >
          <div className="reg-btn">Register Now!</div>
        </a>
      </div>
    </main>
  );
}
