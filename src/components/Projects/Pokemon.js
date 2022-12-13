import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Tabs, Tab } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MiniDrawer from '../SideBar';
import styles from '../../styles/Pokemon.module.css';
import { grey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';


const PokemonBox = (props) => {
    const navigate = useNavigate();

    return <div>

        <div className={styles.titleBar}>
            {/* <h2 variant="bold">Moonshot</h2> */}
            <Typography variant="h2" color={grey[300]} sx={{ fontWeight: 800 }}> Build Pokemon Team </Typography>
            <Typography variant="h6" color={grey[300]} sx={{ fontWeight: 800 }}> Build your dream Pokemon Team with a few clicks</Typography>
            <Typography variant="h6" color={grey[300]} sx={{ fontWeight: 800 }}> Nov. 9 - Nov. 29, 2022</Typography>
        </div>
        <div className={styles.textBar}>
            {/* <h2 variant="bold">Moonshot</h2> */}
            {/* <div className='textBarTitle'>Overview</div> */}
            <Typography className={styles.subTitle} variant="h3" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Overview</Typography>
            <Stack direction="row"
                spacing={5}>
                <Box sx={{ minWidth: 220 }}>
                    <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">My Role</Typography>
                    <Typography variant="h6" color={grey[300]}>
                        <ul>
                            <li>Fontend Developer</li>
                            <li>UI/UX Designer</li>
                        </ul>
                    </Typography>
                </Box>
                <Box sx={{ minWidth: 80 }}>
                    <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Team</Typography>
                    <Typography variant="h6" color={grey[300]}>
                        1
                    </Typography>
                </Box >
                <Box sx={{ minWidth: 150 }}>
                    <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Tools</Typography>
                    <Typography variant="h6" color={grey[300]}>
                        <ul>
                            <li>React</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Highlights</Typography>
                    <Typography variant="h6" color={grey[300]}>
                        <ul>
                            <li>Iteratively Developed a <a target="_blank" rel="noopener noreferrer" href='https://www.figma.com/proto/xo3Vn2s4XlYznsZkT5lH5w/MoonShot?page-id=0%3A1&node-id=2%3A2&viewport=70%2C289%2C0.21&scaling=scale-down&starting-point-node-id=2%3A2'>
                                hi-fi prototype</a> for Moonshot, a startup from Y-Combinaotr 2022</li>
                            <li>One of the founder said he is "beyond words." He even asked us to join the design team!!</li>
                        </ul>
                    </Typography>
                </Box>

            </Stack>
        </div>

        <Box mt={4}><Button onClick={() => navigate('/Projects', { replace: true })} variant="contained" style={{ fontSize: '18px' }} sx={{ fontWeight: 'bold' }}>
            All Projects
        </Button></Box>
    </div>

};

const Pokemon = () => {
    return <MiniDrawer pageIndex={7} component={PokemonBox} />
}

export default Pokemon;