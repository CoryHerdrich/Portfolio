import { 
    faTrashAlt, 
    faSignOutAlt, 
    faEdit, 
    faAnchor, 
    faSquarePlus, 
    faThumbsDown,
    faDroplet,
    faStairs,
    faArrowTrendDown,
    faMobileScreenButton,
    faEnvelope,
    faEarthAmericas,
    faEnvelopeOpen,
    faUnlockKeyhole
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faTrashAlt, faSignOutAlt, faEdit, faAnchor, faSquarePlus, faThumbsDown, faDroplet, faStairs, faArrowTrendDown, faMobileScreenButton, faEarthAmericas, faEnvelope, faEnvelopeOpen, faUnlockKeyhole);
};

export default Icons;