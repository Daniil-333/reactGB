import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowName } from "../../store/profile/reducer";

export const Profile = () => {

    const { showName, name } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(toggleShowName());
    }, [dispatch]);

    console.log(name);

    return (
        <div className="profilePage">
            <h1 className="profilePage__title title">Профиль</h1>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <span>Show Name</span>
            {showName && <div>{name}</div>}
        </div>
    );
}