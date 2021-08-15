import { Paper, Box, Grid, Typography } from "@material-ui/core";
import umdU from '../images/umd.png';
import howardU from '../images/howardU.jpg';
import laurelHigh from '../images/laurelHigh.jpg';
import highPoint from '../images/highPoint.jpg';
import { Stack } from "@material-ui/core";
import { indigo } from '@material-ui/core/colors';
const itemList = [
    {
        title: "University of Maryland",
        subTitle: "College Park, MD",
        college: "Computer, Mathematical, & Natural Sciences",
        duration: "2017 - 2021",
        degree: "BS Computer  Science",
        status: "Graduated",
        img: umdU
    },

    {
        title: "Howard University",
        subTitle: "Washington, D.C",
        college: "Chemistry",
        duration: "2015 - 2017",
        status: "Transferred to University of Maryland",
        img: howardU
    },
    {
        title: "High Point High School",
        subTitle: "PG County, Beltsville, MD",
        status: 'Transferred to Laurel High School',
        duration: "2011 - 2013",
        img: highPoint
    },
    {
        title: "Laurel High School",
        subTitle: "PG County, Laurel, MD",
        college: 'AP Government, English & Literature',
        duration: "2013 - 2015",
        status: 'Graduated',
        degree: "High School Diploma",
        img: laurelHigh
    }
]

function Education() {
    return (
        <Box  overflow='auto' width='100%' display='flex' justifyContent='center'>
            <Box component={Grid} container justifyContent='center' flexWrap='wrap' columnSpacing={{xs:0, sm:1}} rowSpacing={1} maxWidth='80rem'
                backgroundColor='re' flexWrap='wrap'  p={1} >
                {itemList.map(item =>
                    //    sm:w-10/12 md:w-9/12 lg:w-6/12 xl:w-4/12
                    <Grid item width={{xs:370, sm:400, md:450}} textAlign='center' >
                        <Paper  height={240} elevation={3} component={Stack} alignItems='center' sx={{ p: 1, borderRadius: '0.5rem' }} >
                            <Stack direction='row' justifyContent='space-between' width={1}>
                                <Box component='img' src={item.img} width='5rem' height='5rem' />
                                <Typography fontSize='1.3rem' fontWeight='500'  sx={{ alignSelf: 'center' }}>{item.subTitle}</Typography>
                                <Typography fontWeight='500' color='success.dark'>{item.duration}</Typography>
                            </Stack>
                            <Typography fontSize='1.6rem' fontWeight='500' color={indigo[900]}>{item.title}</Typography>
                            <Typography fontSize='1.4rem' fontWeight='500' color='success.dark'>{item.college || <Box visibility='hidden'>..</Box>}</Typography>
                            <Stack direction='row' justifyContent='center' spacing={10} width='100%' mt='1rem'>
                                <Typography color='error.dark' fontSize='1rem' fontWeight='500'>{item.status}</Typography>
                                {item.degree && <Typography color='error.dark' fontSize='1rem' fontWeight='500'>{item.degree}</Typography>}
                            </Stack>
                        </Paper>
                    </Grid>
                )}
            </Box>
        </Box>
    )
}

export default Education;