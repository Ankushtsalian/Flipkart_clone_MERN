import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
  cursor: pointer;
  position: relative;

  & svg {
    height: 18px;
    font-weight: bold;
  }
  & svg:hover {
    transform: rotate(180deg);
  }

  :hover {
    & svg {
      transform: rotate(180deg);
      height: 15px;
    }
    & div {
      opacity: 1;
      visibility: visible;
      translate: 0 0;
    }
  }
`;

const UserProfile = styled.div`
  min-width: 260px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 36px;
  background-color: var(--color-white-bg);
  box-shadow: 0 1px 2px 1px rgb(0 0 0 / 16%);
  opacity: 0;
  visibility: hidden;
  translate: 0 24px;
  transition: 0.3s;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 20px;
  color: black;
  z-index: 999;
`;
const Logout = styled.button`
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 15px;
    left: 50%;
    top: 5px;
    border: 10px solid transparent;
    border-top: 0;
    border-bottom: 10px solid #fff;
    transform: translate(-50%, calc(-100% - 5px));
  }
`;
export { ProfileContainer, UserProfile, Logout };
