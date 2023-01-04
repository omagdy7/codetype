import { useState } from "react";
import Header from "../Components/Header/Header";

const ProfilePage = () => {

  const [userName, setUser] = useState("omagdy7")
  const [avgWpm, setAvgWpm] = useState(87)
  const [testsTaken, setTestsTake] = useState(1011)
  const [testsCompleted, setTestsComplete] = useState(712)
  const [highScore, setHighScore] = useState(110)

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="flex flex-row mt-10 justify-center gap-4 rounded-3xl bg-slate-900">
          <div className="flex items-center justify-center">
            <div className="text-white text-5xl p-4">
              {userName}
            </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div>
            <div className="flex flex-row gap-4 m-8">
              <div>
                <div className="text-gray-500 text-xl p-1">
                  average wpm
                </div>
                <div className="text-white text-5xl p-1">
                  {avgWpm}
                </div>
                <div className="divider divider-vertical"></div>
                <div className="text-gray-500 text-xl p-1">
                  tests started
                </div>
                <div className="text-white text-5xl p-1">
                  {testsTaken}
                </div>
              </div>
              <div className="divider divider-horizontal"></div>
              <div>
                <div className="text-gray-500 text-xl p-1">
                  tests completed
                </div>
                <div className="text-white text-5xl p-1">
                  {testsCompleted}
                </div>
                <div className="divider divider-vertical"></div>
                <div className="text-gray-500 text-xl p-1">
                  high score
                </div>
                <div className="text-white text-5xl p-1">
                  {highScore}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default ProfilePage;
