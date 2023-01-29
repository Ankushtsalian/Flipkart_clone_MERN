import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
  cursor: pointer;
  position: relative;

  & > svg {
    height: 18px;
    font-weight: bold;
  }
  & > svg:hover {
    transform: rotate(180deg);
  }

  :hover {
    & div {
      opacity: 1;
      visibility: visible;
      translate: 0 0;
    }
  }
`;

const UserProfile = styled.div`
  min-width: 260px;
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
  color: black;
  z-index: 999;
  font-weight: bold;
  font-size: 16px;
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
const LogoutWrapper = styled.div`
  padding: 10px;
  border-bottom: 2px solid var(--color-white);
  & div {
    display: flex;
    flex-direction: row;
    & > svg {
      height: 14px;
      font-weight: bolder;
      margin-right: 10px;
      margin-top: 1px;
    }
    & > button {
      cursor: pointer;
      padding: 0;
      font-size: 16px;
      background-color: transparent;
      border: none;
      font-weight: normal;
      margin-bottom: 0 !important;
    }
  }
`;
export { ProfileContainer, UserProfile, LogoutWrapper };
