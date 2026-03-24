import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';

const Container = styled.div`
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background.main};
`;

const Content = styled.main`
    max-width: 1400px;
    margin: 0 auto;
    padding: 32px;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 24px;
`;

const HistoryPage: React.FC = () => {
    return (
        <Container>
            <Header />
            <Content>
                <Title>📜 История кластеризаций</Title>
                <p style={{ color: '#64748b' }}>Здесь будут сохраненные результаты</p>
            </Content>
        </Container>
    );
};

export default HistoryPage;