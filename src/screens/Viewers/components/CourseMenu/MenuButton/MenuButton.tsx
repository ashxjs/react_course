import { FunctionComponent } from "react";
import "./styles.css";

type MenuButtonProps = {
    isOpen: boolean;
    handleOpenClick: () => void;
};

export const MenuButton: FunctionComponent<MenuButtonProps> = ({ isOpen, handleOpenClick }) => {

    return(
        <div
            className="menu-button-container"
            onClick={handleOpenClick}>
            {
                isOpen ? (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#8c8c8d" viewBox="0 0 16 16">
                            <path d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            <path d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#8c8c8d" viewBox="0 0 16 16">
                            <path d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                            <path d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </>
                )
            }
            </div>
    );
};