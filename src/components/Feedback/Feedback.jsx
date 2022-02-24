import CreateFeedback from "./CreateFeedback"
import DemonstrateFeedback from "./DemonstrateFeedback";



const Feedback = ({ guest, getFeedback, deleteCurrentFeedback }) => {

	return <div>
		{
			guest?.feedback === null ? <CreateFeedback guest={guest} onSubmit={getFeedback} /> :
				<DemonstrateFeedback guest={guest} deleteCurrentFeedback={deleteCurrentFeedback} />

		}

	</div>
}

export default Feedback;


