

export const Form = () => {
    const count = 1
    const name = 'GB'
    return <form>
        <p>Count: { count }</p>
        <p>Name: { name }</p>
        <input type="text" />
        <button type="button">Click</button>
    </form>
}