import './index.css'

function App() {
  return (
      <div>
          <div className="h-100 w-full flex items-center justify-center font-sans flex-col pb-4">
            <div className="pb-4">
                <h1 className="text-7xl font-bold">
                    Todo List
                </h1>
            </div>
            <div className="lg:w-1/2 flex flex-row">
                <input placeholder="Add a todo!" className="pr-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 " />
                <div className="pl-3">
                    <button type="button"
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5" >Add Todo
                    </button>
                </div>
            </div>
            <div className="pt-4">
              <ul className="list-disc px-3">
                  <li>Todo</li>
                  <li>Todo</li>
                  <li>Todo</li>
              </ul>
            </div>
          </div>
      </div>
  );
}

export default App;
