import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { ADD_EVENT_ROUTE } from "../constants/url";
import axios from "axios";

type EventType = {
  date: string;
  time: string;
  maxTable: number;
  maxGuest: number;
  manager: string;
};

const AddEvent: React.FC = () => {
  const [event, setEvent] = useState<EventType[]>([
    {
        date: "",
        time: "",
        maxTable: 0,
        maxGuest: 0,
        manager: "",
      }
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setEvent({ ...event, [name]: value });
  };
  const nav = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(event);
    try {
      // You should send `User` instead of `records` to the API
      const { data } = await axios.post(ADD_EVENT_ROUTE, event);
      console.log(data);
      nav(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" w-[100%] h-[600px]">
      <div className="rounded-xl border border-orange-400 bg-slate-400 w-[60%] h-auto p-9 mx-auto my-9">
        <h1 className="text-center text-3xl ">Add Event </h1>
        <form onSubmit={handleSubmit} className="form text-center " action="">
          <div className="my-3">
            <label className="text-xl" htmlFor="FirstName">
               date :{" "}
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="text"
              name="date"
            />
          </div>
          <div className="my-3">
            <label className="text-xl" htmlFor="LastName">
            time :{" "}
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="text"
              name="time"
            />
          </div>
          <div className="my-3 mr-9">
            <label className="text-xl" htmlFor="Email">
            maxTable :{" "}
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="text"
              name="maxTable"
            />
          </div>
          <div className="my-3 mr-9">
            <label className="text-xl mx-1" htmlFor="Password">
            manager :
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="text" 
              name="manager"
            />
          </div>
          <div className="my-3 mr-9">
            <label className="text-xl mx-1" htmlFor="Password">
            maxGuest :
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="text" 
              name="maxGuest"
            />
          </div>
          <div className="">
            <button type="submit" className="btn btn-sm btn-warning">
          Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
