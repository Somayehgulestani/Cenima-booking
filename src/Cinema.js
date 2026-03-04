import { useState } from "react";
const moviesDetails = {
  movies: [{ Matrix: 12 }, { Inception: 15 }, { Parasite: 17 }],
};
let data = {
  seat: [
    { id: 1, status: false },
    { id: 2, status: false },
    { id: 3, status: false },
    { id: 4, status: false },
    { id: 5, status: true },
    { id: 6, status: false },
    { id: 7, status: false },
    { id: 8, status: false },
    { id: 9, status: false },
    { id: 10, status: false },
    { id: 11, status: false },
    { id: 12, status: false },
    { id: 13, status: true },
    { id: 14, status: true },
    { id: 15, status: false },
    { id: 16, status: false },
    { id: 17, status: false },
    { id: 18, status: false },
    { id: 19, status: false },
    { id: 20, status: false },
    { id: 21, status: false },
    { id: 22, status: true },
    { id: 23, status: true },
    { id: 24, status: false },
    { id: 25, status: false },
    { id: 26, status: false },
    { id: 27, status: false },
    { id: 28, status: false },
    { id: 29, status: false },
    { id: 30, status: false },
    { id: 31, status: false },
    { id: 32, status: false },
    { id: 33, status: false },
    { id: 34, status: false },
    { id: 35, status: false },
    { id: 36, status: false },
    { id: 37, status: false },
    { id: 38, status: false },
    { id: 39, status: true },
    { id: 40, status: true },
    { id: 41, status: false },
    { id: 42, status: false },
    { id: 43, status: false },
    { id: 44, status: false },
    { id: 45, status: false },
    { id: 46, status: false },
    { id: 47, status: true },
    { id: 48, status: true },
    { id: 49, status: false },
  ],
};

export function App() {
  const [seatNumber, setSeatNumber] = useState([]);
  const [title, setTitle] = useState("Matrix");

  const seatNumberLength = seatNumber.length;

  return (
    <div className="bg-zinc-800 h-screen flex flex-col items-center">
      <Header />
      <MoviesList title={title} onSetTitle={setTitle} />
      <TV />
      <CenimaSeats seatNumber={seatNumber} onSetSeatNumber={setSeatNumber} />
      <BookingDetails seatNumberLength={seatNumberLength} title={title} />
    </div>
  );
}

function Header() {
  return (
    <h1 className="text-gray-400 mb-4  p-3 text-center text-3xl font-semibold ">
      Cenima Booking
    </h1>
  );
}

function MoviesList({ title, onSetTitle }) {
  return (
    <div>
      <span className="text-white mr-4 text-xl font-semibold">
        Chose the movie:
      </span>
      <select
        className="bg-violet-900 text-white rounded-lg p-1 font-meduim "
        value={title}
        onChange={(e) => onSetTitle(e.target.value)}
      >
        {moviesDetails.movies.map((movie, index) => {
          return (
            <option key={index} className="">
              {Object.keys(movie)}
            </option>
          );
        })}
      </select>
    </div>
  );
}
function TV() {
  return (
    <div className="w-[450px] h-[50px] bg-gradient-to-b from-white via-gray-100 to-transparent  mt-6 rounded-b-[25%] shadow-[0_15px_40px_rgba(255,255,255,0.5)] opacity-90  [transform:perspective(500px)_rotateX(-30deg)]"></div>
  );
}
function CenimaSeats({ seatNumber, onSetSeatNumber }) {
  const [book, setBook] = useState(data);
  function handleBook(index) {
    const bookingSeat = book?.seat?.map((seat, i) => {
      if (index === i) {
        return { ...seat, status: !seat.status };
      } else {
        return seat;
      }
    });
    setBook({ ...book, seat: bookingSeat });
  }
  return (
    <div className="flex justify-center w-[350px] h-[350px] flex-wrap flex-row m-8 ">
      {book.seat.map((seat, index) => {
        return (
          <span
            key={index}
            onMouseUp={() => onSetSeatNumber([...seatNumber, seat.id])}
            onClick={() => handleBook(index)}
            className="w-9 h-9 rounded-t-full text-[8px] text-center text-white m-1 cursor-pointer"
            style={{
              backgroundColor: seat?.status === true ? "#511092" : "#FFaacc",
              cursor: seat?.status && "not-allowed",
            }}
          >
            {seat.id}
          </span>
        );
      })}
    </div>
  );
}

function BookingDetails({ seatNumberLength, title }) {
  return (
    <div className="text-white">
      You chose {seatNumberLength} seats, the total cost is $
      <span>
        {moviesDetails.movies.map((moviePrice, index) => {
          if (moviePrice[title] !== undefined) {
            return (
              <span key={index}>{moviePrice[title] * seatNumberLength}</span>
            );
          } else {
            return (
              <p key={index} style={{ display: "none" }}>
                0
              </p>
            );
          }
        })}
      </span>
      <button className="text-white bg-rose-600 p-1 rounded-md  m-2 block">
        Remove Booked Seats
      </button>
    </div>
  );
}
