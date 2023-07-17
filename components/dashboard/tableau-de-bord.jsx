import React from 'react';
import styled from 'styled-components';

const TableauDeBordStyle = styled.div``;

const TableauDeBord = ({ user }) => {
    return (
        <TableauDeBordStyle>
            <p>Lien d`affiliation: https://mechauffer.com?tokenParrain={user.uid}</p>
        </TableauDeBordStyle>
    );
};

export default TableauDeBord;
