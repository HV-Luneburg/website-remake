import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2024-03-01","projectId":"z61c87ba","dataset":"production","useCdn":false}
          );

export { sanityClient as s };
