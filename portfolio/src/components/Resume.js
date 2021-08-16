import { Box, Button, Stack, Slide } from "@material-ui/core";
import { Document, Page, pdfjs } from 'react-pdf';
import { useState, useEffect } from 'react';
import { indigo } from '@material-ui/core/colors';
import resume from "../images/resumeTemp.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [documentSize, setDocumentSize] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };


    useEffect(() => {
        const resizeDocument = () => window.innerWidth >= 950 ? setDocumentSize(900) : setDocumentSize(window.innerWidth * (0.93));
        resizeDocument();
        window.addEventListener('resize', resizeDocument);
        return () => window.removeEventListener('resize', resizeDocument);
    })

    return (
        <Box component={Stack} alignItems='center' spacing={1} backgroundColor='re' p={1} overflow='auto'>
            <Box>
                <Button component='a' variant='contained' size='large' color='success' href={resume} target='_blank' download='resume_Brian_Ojoh_Mile'>Download Resume</Button>
            </Box>
            <Box>
                <Stack direction='row' spacing={1} alignItems='center'>
                    {Array.from({ length: numPages }, (_, i) => i + 1).map(item =>
                        <Button sx={{ width: 'fit-content' }} variant='outlined' color={item === pageNumber ? 'error' : 'primary'}
                            onClick={() => setPageNumber(item)}>
                            {item}
                        </Button>
                    )}
                </Stack>
            </Box>

            <Box sx={{ 'canvas': { borderRadius: '0.7rem', border: `0.2rem solid ${indigo[900]}` } }}>
                <Document
                    file={resume}
                    onLoadSuccess={onDocumentLoadSuccess}>
                    <Page width={documentSize} pageNumber={pageNumber} />
                </Document>
            </Box>


        </Box>
    )
}


export default Resume;