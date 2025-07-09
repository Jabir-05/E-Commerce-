import { MdClose } from "react-icons/md";
import "./Search.scss";
const Search = ({setShowSearch}) => {
    return <div className="serach-model">
        <div className="form field">
            <input 
            type="text" 
            autoFocus
            placeholder="search for peoducts"

            />
            <MdClose onClick={()=> setShowSearch (false)}/>
        </div>
    </div>;
};

export default Search;
