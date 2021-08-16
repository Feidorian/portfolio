import umdU from '../images/umd.png';
import howardU from '../images/howardU.jpg';
import laurelHigh from '../images/laurelHigh.jpg';
import highPoint from '../images/highPoint.jpg';

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

export default itemList;