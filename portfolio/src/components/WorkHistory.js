import { Box, Icon, Paper, Stack, Typography } from "@material-ui/core";
import {Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator} from '@material-ui/lab';
import Cart from '../images/trolley.svg';
import Shoppers from "../images/shoppers.png";
import { indigo, pink, teal, red, green, deepOrange, deepPurple, grey } from '@material-ui/core/colors';

function WorkHistory() {
    return (
        <Box alignItems='center' component={Stack} mt={3} backgroundColor='re' overflow='auto' >
            <Box backgroundColor='blu'>
            <Timeline>
                <TimelineItem>
                    <TimelineSeparator>
                        <Icon component='img' src={Cart} sx={{fontSize:'5rem'}}/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent >
                        <Paper elevation='3' sx={{py:1, px:3, width:{xs:240, sm:330}, borderRadius:'0.5rem'}}>
                            <Stack  direction={{xs:'column', sm:'row'}} justifyContent={{xs:'center', sm:'space-between'}} alignItems='center'>
                                <Icon component='img' src={Shoppers} sx={{fontSize:'5rem'}} />
                                <Box >
                                    <Typography textAlign='center' fontSize='1.2rem' fontWeight='600' color={teal[900]}>Shoppers Food - UNFI</Typography>
                                    <Typography textAlign='center' fontSize='1.2rem' fontWeight='600' color={indigo[900]}>Deli Clerk</Typography>
                                    <Typography textAlign='center' fontSize='1.2rem' fontWeight='600' color={grey[700]}>Laurel, MD</Typography>
                                    <Typography textAlign='center' fontSize='1.2rem' fontWeight='600' color={red[700]}>2015 - Present</Typography>
                                </Box>
                            </Stack>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
        </Box>
    )
}


export default WorkHistory;