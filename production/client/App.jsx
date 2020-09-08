import React, { useReducer } from 'react';
import { Context, initialState, reducer } from './store.jsx';
import ControlPanel from './controlpanel.jsx';
import QueryDisplay from './queryDisplay.jsx';
import GraphViz from './Viz.jsx'
import PerformanceDisplay from './performanceDisplay.jsx'

const App = () => {

	const [store, dispatch] = useReducer(reducer, initialState)

	return (
		<div>
			<Context.Provider value={{ store, dispatch }}>
				<div id='mainContainer'>
					<div className="row" id='topRow'>
						<div className="quadrant" id="controlPanel">
							<ControlPanel />
						</div>
						<div className="quadrant" id="queryDisplay">
							<QueryDisplay />
						</div>
					</div>
					<div className="row" id="bottomRow">
						<div id="performanceDisplay" className="quadrant">
							<PerformanceDisplay />
						</div>
						<div id="graphViz" className="quadrant">
							<GraphViz />
						</div>
					</div>
				</div>
			</Context.Provider>
		</div>
	)
}

export default App
