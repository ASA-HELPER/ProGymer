import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            {/* <img src='https://static.secure.website/wscfus/5769861/uploads/arrow_773.png' alt="right-arrow" style={{ height: '20px', width: '20px' }} /> */}
            <NavigateBeforeIcon></NavigateBeforeIcon>
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            {/* <img src='https://th.bing.com/th/id/R.fdeb923d963b131c3df59e878b8ed81c?rik=ZgiZgmEa2qCPJA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f7Ta%2fLe7%2f7TaLe7RTA.jpeg&ehk=6OgS7YBJHDQyx32lp0QO5tDggTOvEjwrMBD6doNRwIw%3d&risl=&pid=ImgRaw&r=0' alt="right-arrow" style={{ height: '20px', width: '20px' }} /> */}
            <NavigateNextIcon></NavigateNextIcon>
        </Typography>
    );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
            <Box
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px"
            >
                {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
            </Box>
        ))}
    </ScrollMenu>
);

export default HorizontalScrollbar;