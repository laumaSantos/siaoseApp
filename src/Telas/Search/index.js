import React, { useState } from 'react';
import {
    Container,
    SearchArea,
    SearchInput,
    Scroller,
    LoadingIcon,
    ListArea,
    EmptyWarning
} from './styles';

import MakeItem from '../../Componentes/MakeItem';
import Api from '../../Api';

export default () => {

    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [emptyList, setEmptyList] = useState(false);
    const [list, setList] = useState([]);

    const searchBarbers = async () => {
        setEmptyList(false);
        setLoading(true);
        setList([]);

        if(searchText != '') {
            let res = await Api.search(searchText);
            if(!res.data.error) {
                    setList(res.data);
            } else {
                    setEmptyList(true);
            }
        }

        setLoading(false);
    }

    return (
        <Container>
            
            <SearchArea>
                <SearchInput
                    placeholder="Digite o nome do profissional"
                    placeholderTextColor="#FFFFFF"
                    value={searchText}
                    onChangeText={t=>setSearchText(t)}
                    onEndEditing={searchBarbers}
                    returnKeyType="search"
                    autoFocus
                    selectTextOnFocus
                />
            </SearchArea>

            <Scroller>
                {loading &&
                    <LoadingIcon size="large" color="#000000" />
                }

                {emptyList &&
                    <EmptyWarning>Não achamos profissionais com esse nome "{searchText}"</EmptyWarning>
                }

                <ListArea>
                    {list.map((item, k)=>(
                        <MakeItem key={k} data={item} />
                    ))}
                </ListArea>

            </Scroller>

        </Container>
    );
}