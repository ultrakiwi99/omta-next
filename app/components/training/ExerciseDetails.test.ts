import {  mountSuspended } from '@nuxt/test-utils/runtime';
import { it, expect, describe } from 'vitest';
import SessionDetails from './ExerciseDetails.vue';

describe('SessionDetails', () => {
    it('can mount the component and render props', async () => {
        const component = await mountSuspended(SessionDetails, {
            props: {
            id: '1',
            name: 'Exercise one',
            sets: 3,
            reps: 10,
            weight: 10
        }});
        expect(component.text()).toContain('Exercise one');
        expect(component.text()).toContain('3 sets, 10 reps, 10 kg');
    });
});