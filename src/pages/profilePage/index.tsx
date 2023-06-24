import { Container, Grid, Text } from '@nextui-org/react';
import { uniqueId } from 'lodash';
import React, { useMemo } from 'react';

import CommonPageHeader from '~/shared/ui/components/commonPageHeader/CommonPageHeader';

import { coinModel, coinUi } from '~/entities/coin';

import { FavoriteCoin } from '~/features/favoriteCoin';
import * as likeCoinModel from '~/features/favoriteCoin/model';

import { Header } from '~/widgets/header';

const { CoinListCard } = coinUi;

const ProfilePage = () => {
    const likedCoinsIds = likeCoinModel.selectors.useFavoritedCoinsIds();
    const coinList = coinModel.coinListSubModel.selectors.useCoinList();

    const favoriteCoins = useMemo(() => {
        return coinList.filter((coin) => likedCoinsIds.includes(coin.item.id));
    }, []);

    return (
        <div>
            <Header sticky />
            <Container>
                <CommonPageHeader headerText="Мои монеты" />
                <Grid.Container gap={1} justify="flex-start">
                    {favoriteCoins.length === 0 ? (
                        <Text h5 css={{ textAlign: 'center', mt: '$6' }}>
                            Список любимых монет пуст, попробуйте перезагрузить страницу
                        </Text>
                    ) : (
                        <>
                            {favoriteCoins.map((coin) => {
                                return (
                                    <Grid xs={12} sm={4} key={uniqueId()}>
                                        <CoinListCard
                                            coin={coin}
                                            likeComponent={<FavoriteCoin coinId={coin.item.id} />}
                                        />
                                    </Grid>
                                );
                            })}
                        </>
                    )}
                </Grid.Container>
            </Container>
        </div>
    );
};

export default ProfilePage;
