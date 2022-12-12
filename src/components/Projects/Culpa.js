import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Tabs, Tab } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MiniDrawer from '../SideBar';

const CulpaBox = (props) => {
    const navigate = useNavigate();

    return <div>

        <h1>hi</h1>

        <Box mt={4}><Button onClick={() => navigate('/Projects', { replace: true })} variant="contained" style={{ fontSize: '18px' }} sx={{ fontWeight: 'bold' }}>
            All Projects
        </Button></Box>
    </div>

};

const Culpa = () => {
    return <MiniDrawer pageIndex={5} component={CulpaBox} />
}

export default Culpa;