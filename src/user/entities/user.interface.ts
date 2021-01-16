import { Field, GraphQLISODateTime, ID, InterfaceType } from '@nestjs/graphql';
import { Prisma, UserProfile } from '@prisma/client';
import { UserProfileEntity } from '../profile';

/**
 * User interface.
 */
@InterfaceType({
  description: 'User interface.',
})
export class UserInterface
  implements
    Omit<
      Prisma.UserGetPayload<{
        include: {
          profile: true;
        };
      }>,
      'phone' | 'email' | 'password'
    > {
  /**
   * User ID
   */
  @Field((type) => ID, {
    description: 'User ID',
  })
  id: string;

  /**
   * User login name
   */
  @Field((type) => String, {
    nullable: true,
    description: 'User login name',
  })
  login: string;

  /**
   * User registered date at.
   */
  @Field((type) => GraphQLISODateTime, {
    description: 'User registered date at.',
  })
  createdAt: Date;

  /**
   * User profile.
   */
  @Field((type) => UserProfileEntity, {
    description: 'The user profile',
  })
  profile: UserProfile;
}