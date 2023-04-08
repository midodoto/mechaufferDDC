import React from 'react';
import styled from 'styled-components';

const TableauDeBordStyle = styled.div``;

const TableauDeBord = ({ user }) => {
    return (
        <TableauDeBordStyle>
            <p>{user.uid}</p>
        </TableauDeBordStyle>
    );
};

export default TableauDeBord;
