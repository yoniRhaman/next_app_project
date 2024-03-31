import Image from "next/image"; // Assuming you're using Next.js

export default function SectionPage() {
  return (
    <>
      <div className="top-container">
        <div className="in-container">
          <h1>+10</h1> <p>happy client</p>
        </div>
        <div className="in-container">
          <h1>+20</h1> <p>happy customer</p>
        </div>
        <div className="in-container">
          <h1>+10</h1> <p>happy netef</p>
        </div>
        <div className="in-container">
          <h1>+20</h1> <p>happy yonatan</p>
        </div>
      </div>
      <div className="img-container">
        <Image
          src="https://purepng.com/public/uploads/large/purepng.com-mariomariofictional-charactervideo-gamefranchisenintendodesigner-1701528634653vywuz.png"
          width={200}
          height={200}
          alt="Picture of the author"
          objectFit="contain"
        />
      </div>
      <div className="container-exciting column">
        <p>
          DO YOU THINK YOU MAKE SKALIME <br />
          JONI US TODAT!!!
        </p>
        <a>NetefMakeSkalime@gmail.com</a>
      </div>
      <div className="end-container">
        <div className="left-container">
          <div className="up-container">
            <p>call us</p> <h1>+972502256732</h1>
          </div>
          <div className="buttom-container">
            <p>call us</p> <h1>+972502256732</h1>
          </div>
        </div>

        <div className="right-container">
          <div className="up-container">
            <p>call us</p> <h1>+972502256732</h1>
          </div>
          <div className="buttom-container">
            <p>call us</p> <h1>+972502256732</h1>
          </div>
          
        </div>
      </div>
    </>
  );
}
