import React, {useState} from 'react';
import styled from 'styled-components';

const TableauDeBordStyle = styled.div``;

const Button = styled.div`
    cursor: pointer;
`;

const TableauDeBord = ({ user }) => {

    const [link, setLink] = useState(`https://me-chauffer.vercel.app/?tokenParrain=${user.uid}`)

    return (
        <TableauDeBordStyle>
            <Button>
            <p onClick={() => {navigator.clipboard.writeText(link)}}>Lien d`affiliation (Cliquer pour copier le lien): {link}</p>

            </Button>
        </TableauDeBordStyle>
    );
};

export default TableauDeBord;
