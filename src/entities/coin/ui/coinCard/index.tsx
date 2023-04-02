import { Card, Grid } from '@nextui-org/react';
import React, { FunctionComponent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { TrendingCoin } from '~/shared/api';

import styles from './styles.module.css';

interface CoinCardProps {
    coin: TrendingCoin;
    badge?: ReactNode;
}

export const CoinCard: FunctionComponent<CoinCardProps> = ({ coin, badge }) => {
    const {
        item: { large, id, name, symbol, priceBtc }
    } = coin;
    const navigate = useNavigate();
    const handleCardClick = () => navigate({ pathname: `/coin/${id}` });

    return (
        <Grid xs={12} onClick={handleCardClick}>
            <div className={styles.cardWrapper}>
                {badge && <div className={styles.badgeWrapper}>{badge}</div>}
                <Card isPressable isHoverable variant="bordered">
                    <Card.Body className={styles.flexContainer}>
                        <div className={styles.description}>
                            <img alt={id} src={large} width="34px" height="34px" />
                            <div className={styles.nameWrapper}>
                                <div className={styles.name}>{name}</div>
                                <div className={styles.symbol}>{symbol}</div>
                            </div>
                        </div>
                        <div className={styles.priceWrapper}>
                            <div className={styles.priceName}>Price to Bitcoin:</div>
                            <span className={styles.priceValue}>{priceBtc}</span>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Grid>
    );
};
