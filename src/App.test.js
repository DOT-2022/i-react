import { render, screen } from '@testing-library/react';
import App from './App';
import TodoCard from './components/cards/todo-card.component';
describe('TODO Header', () => {
    it('renders heading', () => {
        render(<App />);
        const textElement = screen.getByText(/Simple TODO/i);
        expect(textElement).toBeInTheDocument();
    });

    it('renders subheading', () => {
        render(<App />);
        const textElement = screen.getByText(/Track what needs to be tackled next. Add todos, toggle their completion state, edit existing items, and quickly clear the finished work./);
        expect(textElement).toBeInTheDocument();
    });
});

describe('TODO Card Container', () => {
    it('renders Card header', () => {
        render(<TodoCard />);
        const textElement = screen.getByText(/Bucket List/i);
        expect(textElement).toBeInTheDocument();
    });

    describe('Card Input Item', () => {
        it('renders Card Input Box', () => {
            render(<TodoCard />);
            const textElement = screen.getByText(/Add a new task.../i);
            expect(textElement).toBeInTheDocument();
        });

        it('renders Card Add Button', () => {
            render(<TodoCard />);
            const textElement = screen.getByText('Add');
            expect(textElement).toBeInTheDocument();

            const btnRole = screen.getByRole('button');
            expect(btnRole).toBeInTheDocument();
        });
    });
});