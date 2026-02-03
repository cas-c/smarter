import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { StackName, sort } from "./sort";

type Inputs = {
  width: number;
  height: number;
  length: number;
  mass: number;
};

function App() {
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm<Inputs>({
    mode: "onChange",
    defaultValues: {
      height: 0,
      length: 0,
      mass: 0,
      width: 0,
    },
  });
  const [stack, setStack] = useState<StackName | "">("");
  const onSubmit = (data) =>
    setStack(
      sort(
        Number(data.width),
        Number(data.height),
        Number(data.length),
        Number(data.mass),
      ),
    );

  return (
    <>
      <section id="content" className="mx-auto py-20">
        <form onChange={handleSubmit(onSubmit)}>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col w-[80px]">
              <label htmlFor="width" className="w-full">
                width
              </label>
              <input
                type="number"
                className="w-full"
                defaultValue="0"
                {...register("width")}
              />
            </div>
            <div className="flex flex-col w-[80px]">
              <label htmlFor="height" className="w-full">
                height
              </label>
              <input
                type="number"
                className="w-full"
                defaultValue="0"
                {...register("height")}
              />
            </div>
            <div className="flex flex-col w-[80px]">
              <label htmlFor="length" className="w-full">
                length
              </label>
              <input
                type="number"
                className="w-full"
                defaultValue="0"
                {...register("length")}
              />
            </div>
            <div className="flex flex-col w-[80px]">
              <label htmlFor="mass" className="w-full">
                mass
              </label>
              <input
                type="number"
                className="w-full"
                defaultValue="0"
                {...register("mass")}
              />
            </div>
          </div>
        </form>
        <div className="pt-8">Stack: {stack ? StackName[stack] : "None"}</div>
      </section>
      <section id="spacer"></section>
      <section>
        <p>common sizes</p>
        <input
          type="button"
          onClick={() => {
            setValue("width", 10);
            setValue("height", 10);
            setValue("length", 10);
            setValue("mass", 10);
            onSubmit({
              width: 10,
              height: 10,
              length: 10,
              mass: 10,
            });
          }}
          value="10x10x10 @ 10kg"
        />

        <input
          type="button"
          onClick={() => {
            setValue("width", 20);
            setValue("height", 10);
            setValue("length", 15);
            setValue("mass", 20);
            onSubmit({
              width: 10,
              height: 10,
              length: 10,
              mass: 10,
            });
          }}
          value="20x10x15 @ 20kg"
        />
        <input
          type="button"
          onClick={() => {
            setValue("width", 40);
            setValue("height", 59);
            setValue("length", 77);
            setValue("mass", 19);
            onSubmit({
              width: 40,
              height: 59,
              length: 77,
              mass: 19,
            });
          }}
          value="40x59x77 @ 19kg"
        />
      </section>
      <section className="mt-8">
        <p>special sizes</p>
        <input
          type="button"
          onClick={() => {
            setValue("width", 10);
            setValue("height", 200);
            setValue("length", 10);
            setValue("mass", 10);
            onSubmit({
              width: 10,
              height: 200,
              length: 10,
              mass: 10,
            });
          }}
          value="10x200x10 @ 10kg"
        />

        <input
          type="button"
          onClick={() => {
            setValue("width", 20);
            setValue("height", 10);
            setValue("length", 15);
            setValue("mass", 30);
            onSubmit({
              width: 20,
              height: 10,
              length: 15,
              mass: 30,
            });
          }}
          value="20x10x15 @ 30kg"
        />
        <input
          type="button"
          onClick={() => {
            setValue("width", 200);
            setValue("height", 10);
            setValue("length", 200);
            setValue("mass", 15);
            onSubmit({
              width: 200,
              height: 10,
              length: 200,
              mass: 15,
            });
          }}
          value="200x10x200 @ 15kg"
        />
      </section>
      <section className="mt-8">
        <p>rejected sizes</p>
        <input
          type="button"
          onClick={() => {
            setValue("width", 10);
            setValue("height", 200);
            setValue("length", 10);
            setValue("mass", 200);
            onSubmit({
              width: 10,
              height: 200,
              length: 10,
              mass: 200,
            });
          }}
          value="10x200x10 @ 200kg"
        />

        <input
          type="button"
          onClick={() => {
            setValue("width", 20);
            setValue("height", 10);
            setValue("length", 150);
            setValue("mass", 30);
            onSubmit({
              width: 20,
              height: 10,
              length: 150,
              mass: 30,
            });
          }}
          value="20x10x150 @ 30kg"
        />
        <input
          type="button"
          onClick={() => {
            setValue("width", 10);
            setValue("height", 10);
            setValue("length", 200);
            setValue("mass", 20);
            onSubmit({
              width: 10,
              height: 10,
              length: 200,
              mass: 20,
            });
          }}
          value="10x10x200 @ 20kg"
        />
      </section>
    </>
  );
}

export default App;
