import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ImageUpload from "./components/ImageUpload";
import TextInput from "./components/TextInput";
import SizeSelector from "./components/SizeSelector";
import themes from "./themes";

export default function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [preview, setPreview] = useState("/Picture-512.png");
  const [showDesign, setShowDesign] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      height: 180,
      weight: 80,
      build: "athletic",
      textLines: ["", "", ""],
    },
  });


  const textLines = watch("textLines");

  const onSubmit = (data) => {
    console.log("Submitted:", data);
    setShowDesign(true);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.key.toLowerCase() === "q") {
        setThemeIndex((prev) => (prev + 1) % themes.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col md:flex-row p-4 ${themes[themeIndex].bg}`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col justify-between flex-1 p-4 ${themes[themeIndex].form}`}
      >
        <SizeSelector register={register} />
        <ImageUpload setValue={setValue} setPreview={setPreview} preview={preview} buttonClass={themes[themeIndex].button}/>
        <TextInput register={register}  />
        <button className={`${themes[themeIndex].button} mt-4`}>Submit</button>
      </form>

      <div className="md:w-[50%] relative flex justify-center items-center">
        <img
          src="36634-6-blank-white-t-shirt-template.png"
          className="object-contain h-full shirt" 
          alt="T-shirt"
        />
        {showDesign && (
          <>
            {preview && (
              <img
                src={preview}
                alt="Uploaded design"
                className="absolute object-contain"
                style={{
                  width: "30%",
                  maxHeight: "40%",
                  top: "32%",
                  left: "35%",
                }}
              />
            )}
            <div
              className="absolute text-center w-full"
              style={{
                top: "65%",
                transform: "translateY(-50%)",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {textLines.map((line, i) => (
                <p key={i} className="text-sm leading-tight">{line}</p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
