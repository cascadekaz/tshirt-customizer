export default function TextInput({ register }) {
  return (
    <div className="p-2">
      <label>Text to print:</label>
      {[0, 1, 2].map((i) => (
        <input
          key={i}
          {...register(`textLines.${i}`)}
          maxLength={40}
          placeholder={`Line ${i + 1}`}
          className="input mt-1 ml-2 border border-gray-300 rounded py-1 px-1 "
        />
      ))}
    </div>
  );
}
