import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        loadComponent: async () => {
            const module = await import('./home/home.component');
            return module.HomeComponent;
        },
    },

    {
        path: 'todos',
        pathMatch: 'full',
        loadComponent: async ()=> {
            const module = await import('./todos/todos.component');
            return module.TodosComponent;
        }
    }
];
