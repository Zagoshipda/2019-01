import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontVariantCaps: 'all-small-caps',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: {
    width: drawerWidth,
    padding: 5,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export const NicknameBodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const QuizModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 80%;
  padding: 5%;
`;

export const QuizModalButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
`;
