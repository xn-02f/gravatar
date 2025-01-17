/**
 * Get the URL to a Gravatar image from an email.
 *
 * @param email - Email matching a Gravatar profile.
 * @example
 * ```
 * import gravatar from '@xn-02f/gravatar';
 * gravatar('i@example.com', {s: 80});
 * //=> 'https://www.gravatar.com/avatar/961254e23a4de2aa887ac0f56ef5debf?s=80'
 * ```
 */

declare const gravatar: (
    email: string,

    // TODO Refine 'options' parameter.
    options?: object
) => string;

export default gravatar;
