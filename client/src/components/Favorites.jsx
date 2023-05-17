// import Favorite from './Favorite'
import Card from './Card';
import { connect } from "react-redux"
import { filterCards, orderCards } from '../redux/actions'
import { useDispatch } from "react-redux"


function Favorites({ myFavorites }) {
    const dispatch = useDispatch()

    const handleFilter = (event) => dispatch(filterCards(event.target.value))
    const handleOrder = (event) => dispatch(orderCards(event.target.value))


    return (
        <div>
            {/* Filter */}
            <select name="" id="" onChange={handleOrder}>
                <option value="A">Ascending</option>
                <option value="D">Descending</option>
            </select>

            {/* Sorting */}
            <select name="" id="" onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>

            {/* Rendering favorites */}
            {myFavorites.map((favorite) => {
                return (
                    <Card
                        key={favorite.id}
                        character={favorite}
                        showCloseButton={false} />
                )
            })}
        </div>
    );
}


const mapStateToProps = (state) => ({
    myFavorites: state.myFavorites,
})
export default connect(mapStateToProps, null)(Favorites);