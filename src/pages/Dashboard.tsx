import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import DatasetUpload from '../components/Dataset/DatasetUpload';
import ClusterParams from '../components/Clustering/ClusterParams';

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
    margin-bottom: 8px;
`;

const Subtitle = styled.p`
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 32px;
    font-size: 16px;
`;

const Dashboard: React.FC = () => {
    const [selectedDatasetId, setSelectedDatasetId] = useState<number | null>(null);
    const [datasetHeaders, setDatasetHeaders] = useState<string[]>([]);

    const handleUploadSuccess = (datasetId: number, headers: string[]) => {
        setSelectedDatasetId(datasetId);
        setDatasetHeaders(headers);
    };

    return (
        <Container>
            <Header />
            <Content>
                <Title>📊 Кластеризация данных</Title>
                <Subtitle>
                    Загрузите CSV файл, выберите параметры и запустите K-Means кластеризацию
                </Subtitle>

                <DatasetUpload onUploadSuccess={handleUploadSuccess} />

                {selectedDatasetId && (
                    <ClusterParams
                        datasetId={selectedDatasetId}
                        headers={datasetHeaders}
                        onSuccess={() => {
                            // Обновить историю после сохранения
                            console.log('Кластеризация сохранена');
                        }}
                    />
                )}
            </Content>
        </Container>
    );
};

export default Dashboard;