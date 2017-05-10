export default function User (attributes) {
    this.id = attributes.id;
    this.userName = attributes.userName;
    this.displayName = attributes.displayName || '';
    this.bio = attributes.bio || '';
    this.avatar = attributes.avatar || '';
}
