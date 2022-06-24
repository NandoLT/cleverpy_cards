import React from 'react';
import { Provider } from 'react-redux';
import store from '../../App/store';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { Card } from '../../components/Pages/Home/Card';
import { PostType } from '../../types';

const cardsData_empty:Array<PostType> = [];
const cardsData_filled = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
];

afterEach(cleanup);

describe('Testing <Card />', () => {
    
    test("<Cards /> must return to <CardContainer /> a collection of posts if the array is filled", () => {
        render(<Provider store={store}><Card postsInfo={cardsData_filled} /></Provider>);
        const roleArticleLength = screen.getAllByRole('article').length;
        expect(roleArticleLength).toBeGreaterThan(1);
    })

    test("<Cards /> must return to <CardContainer /> a message 'No Post availables' if posts collection is empty", () => {
        render(<Provider store={store}><Card postsInfo={cardsData_empty} /></Provider>);
        expect(screen.getByText('No Post availables')).toBeInTheDocument();        
    })
    
    test('if we click in delete button  in <Cards /> we must see a modal advert', () => {
        render(<Provider store={store}><Card postsInfo={cardsData_filled} /></Provider>);
        const btnDelete = screen.getAllByTestId('delete-button');
        fireEvent.click(btnDelete[0]);
        expect(screen.getByRole('modal')).toBeInTheDocument();
    })

})
