export default function SizeSelector({ register }) {
  return (
    <div className="p-2 space-y-3">
      <div>
        <label className="block mb-1">Height (cm):</label>
        <input
          type="number"
          {...register("height")}
          className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1">Weight (kg):</label>
        <input
          type="number"
          {...register("weight")}
          className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1">Build:</label>
        <select
          {...register("build")}
          className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="lean">Lean</option>
          <option value="reg">Regular</option>
          <option value="athletic">Athletic</option>
          <option value="big">Big</option>
        </select>
      </div>
    </div>
  );
}
