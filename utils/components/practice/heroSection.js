import "./page.css";
import Image from "next/image";

export default function Practice() {
  return (
    <>
      <div className="page-container column center">
        <div className="h-container column center">
          <h1>bsjbdabaib <br /> oasosandbioad <br />asjnjasjbuisadb</h1>
        </div>

        <Image
          src="https://purepng.com/public/uploads/large/purepng.com-mariomariofictional-charactervideo-gamefranchisenintendodesigner-1701528634653vywuz.png"
          width={200}
          height={200}
          alt="Picture of the author"
          objectFit="contain"
        />
      </div>
    </>
  );
}
