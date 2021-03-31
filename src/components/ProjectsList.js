/** @jsx jsx */
import { Box, Button, Grid, Flex, jsx, Text, Input, Select } from 'theme-ui'
import React, { useState } from 'react'
import ProjectCard from './projectCard'
import NoImage from '../images/no-image-available.jpg'
import SearchIcon from '../images/svg/general/search-icon.svg'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import DropdownInput from '../components/dropdownInput'
import theme from '../gatsby-plugin-theme-ui'
import * as JsSearch from 'js-search'
import DropIcon from '../images/svg/general/dropdown-arrow.svg'

const ProjectSection = styled(Box)``

export const OrderByField = {
  Balance: 'Balance',
  CreationDate: 'CreationDate'
}

export const OrderByDirection = {
  ASC: 'ASC',
  DESC: 'DESC'
}

const CreateLink = styled(Link)`
  text-align: right;
  text-decoration: none;
  font-family: 'Red Hat Display', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  color: ${theme.colors.primary};
  align-self: center;
  :hover {
    color: ${theme.colors.hover};
  }
`
const IconSearch = styled(SearchIcon)`
  margin-left: -2.5rem;
`
const DropItem = styled.div`
  padding: 1rem 0 1rem 1rem;
  :hover {
    background-color: ${theme.colors.lightestBlue};
  }
`
const IconDrop = styled(DropIcon)`
  position: absolute;
  right: 1rem;
  top: 0.563rem;
`
const SelectMenu = props => {
  const { caption, options = {}, onChange = () => {}, defaultValue } = props
  return (
    <div
      style={{
        flexGrow: 1,
        margin: '10px'
      }}
    >
      <Text
        pl={3}
        sx={{
          variant: 'text.default',
          color: 'secondary',
          fontSize: 3,
          fontWeight: 'medium',
          textDecoration: 'none',
          textTransform: 'uppercase'
        }}
      >
        {caption}
      </Text>
      <IconDrop />
      <Text
        sx={{
          variant: 'text.medium',
          fontWeight: 'bold',
          color: 'secondary'
        }}
      ></Text>
      <Select
        pl={3}
        sx={{
          variant: 'text.default',
          color: 'secondary',
          fontSize: 3,
          fontWeight: 'medium',
          textDecoration: 'none',
          width: '100%'
        }}
        defaultValue={defaultValue}
        onChange={e => onChange(e.target.value)}
        mb={3}
        name='sortBy'
        id='sortBy'
      >
        {Object.entries(options).map(([key, value]) => (
          <option
            sx={{
              variant: 'text.medium',
              fontWeight: 'bold',
              color: 'secondary'
            }}
          >
            {value}
          </option>
        ))}
      </Select>
    </div>
  )
}

const orderBySelectOptions = {}
orderBySelectOptions[OrderByField.Balance] = 'Amount Raised'
orderBySelectOptions[OrderByField.CreationDate] = 'Recent'

const ProjectsList = props => {
  const {
    projects,
    categories,
    totalCount,
    loadMore,
    hasMore,
    selectOrderByField
  } = props

  const [search, setSearch] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState()
  const [searchResults, setSearchResults] = useState(projects)
  const [category, setCategory] = useState(0)
  const [sortBy, setSortBy] = useState(0)
  const categoryList = Array.isArray(categories)
    ? ['All'].concat(categories.map(o => o.name))
    : ['All']
  const sortBys = ['Quality score', 'Amount raised', 'Hearts']

  React.useEffect(() => {
    rebuildIndex()
  }, [])

  function searchProjects(e) {
    const queryResult = search.search(e.target.value)
    setSearchQuery(e.target.value)
    setSearchResults(queryResult)
  }
  // handleSubmit = e => {
  //   e.preventDefault()
  // }
  function rebuildIndex() {
    const dataToSearch = new JsSearch.Search('id')
    /**
     *  defines a indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    //dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex('title')
    dataToSearch.addIndex('title') // sets the index attribute for the data
    dataToSearch.addIndex('description') // sets the index attribute for the data
    dataToSearch.addIndex('impactLocation') // sets the index attribute for the data
    dataToSearch.addDocuments(projects) // adds the data to be searched
    setSearch(dataToSearch)
    setIsLoading(false)
  }

  function filterCategory(searchedResults) {
    const categoryName = categoryList[category].toLowerCase()

    return searchedResults.filter(
      o => o.categories.filter(c => c.name === categoryName).length > 0
    )
  }

  const searchedResults = searchQuery === '' ? projects : searchResults
  const projectsFiltered =
    category === 0 ? searchedResults : filterCategory(searchedResults)

  function sum(items, prop) {
    return items.reduce(function (a, b) {
      return a + b[prop]
    }, 0)
  }

  //['Quality score', 'Amount raised', 'Hearts']
  const sortFunctions = [
    function qualityScore(a, b) {
      return b.qualityScore - a.qualityScore
    },
    function amountRaised(a, b) {
      return b.totalDonations - a.totalDonations
    },
    function hearts(a, b) {
      return b.totalHearts - a.totalHearts
    }
  ]

  const projectsFilteredSorted = projectsFiltered.sort(sortFunctions[sortBy])

  return (
    <>
      <Flex
        sx={{
          p: ['0 1em', '0 5em', '0 5em'],
          justifyContent: 'space-between',
          margin: '1.5em 0'
        }}
      >
        <Text
          style={{
            width: '50%'
          }}
        >
          <span
            sx={{
              variant: 'headings.h1',
              width: ['100%', null, null],
              fontWeight: '500',
              fontSize: ['8', '3.25rem', '3.25rem'],
              color: 'secondary'
            }}
          >
            Projects{' '}
          </span>
          {totalCount && (
            <span
              sx={{
                variant: 'headings.h5',
                color: 'bodyLight'
              }}
            >{`(${totalCount})`}</span>
          )}
        </Text>
        <CreateLink to='/create'>Create a project</CreateLink>
      </Flex>
      <ProjectSection pt={4} sx={{ variant: 'grayBox' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '1440px',
            padding: '0 1.0875rem 1.45rem'
          }}
        >
          <Flex
            sx={{
              width: '100%',
              flexDirection: ['column-reverse', null, 'row'],
              mt: 2
            }}
          >
            <Flex
              sx={{
                width: '100%',
                flexDirection: ['row', null, 'row'],
                justifyContent: ['space-around', null, null]
              }}
            >
              <Flex
                sx={{
                  width: ['30%'],
                  alignItems: 'center',
                  mt: [4, 0, 0]
                }}
              >
                <DropdownInput
                  options={categoryList}
                  current={0}
                  setCurrent={i => setCategory(i)}
                />
              </Flex>
              {/* <Flex
                  sx={{
                    width: ['30%'],
                    alignItems: 'center',
                    mt: [4, 0, 0]
                  }}
                >
                  <DropdownInput
                    options={locations}
                    current={0}
                    // setCurrent={i => setFilter(i)}
                  />
                </Flex> */}
              <Flex
                sx={{
                  width: ['30%'],
                  alignItems: 'center',
                  mt: [4, 0, 0]
                }}
              >
                <DropdownInput
                  options={sortBys}
                  current={0}
                  setCurrent={i => setSortBy(i)}
                />
              </Flex>
              {/* <SelectMenu
                  caption='sort by'
                  options={orderBySelectOptions}
                  onChange={selectOrderByField}
                /> */}
            </Flex>
            <Flex
              sx={{
                flexGrow: 3,
                alignItems: 'center',
                display: 'flex',
                width: ['100%', '100%', '50%'],
                padding: '0 3% 0 0',
                mt: [4, 0, 0],
                mb: [0, 4, 0]
              }}
            >
              <Input
                placeholder='Search Projects'
                variant='forms.search'
                style={{
                  width: '100%',
                  margin: 'auto'
                }}
                onChange={searchProjects}
              />
              <IconSearch />
            </Flex>
          </Flex>

          <div
            style={{
              width: '100%',
              margin: 0
            }}
          >
            <Grid
              p={4}
              columns={[1, 2, 3]}
              style={{
                margin: 0,
                columnGap: '2.375em',
                justifyItems: 'center'
              }}
            >
              {projectsFilteredSorted
                ? projectsFilteredSorted
                    ?.slice()
                    .map((project, index) => (
                      <ProjectCard
                        shadowed
                        id={project.id}
                        listingId={project.title + '-' + index}
                        key={project.title + '-' + index}
                        name={project.title}
                        slug={project.slug}
                        donateAddress={project.donateAddress}
                        image={project.image || NoImage}
                        raised={project.balance}
                        project={project}
                      />
                    ))
                : null}
            </Grid>
          </div>
          {hasMore && (
            <div sx={{ justifySelf: 'center', textAlign: 'center' }}>
              <Button
                sx={{
                  variant: 'buttons.nofillGray',
                  color: 'bodyLight',
                  fontSize: 14,
                  mb: '3rem'
                }}
                onClick={() => loadMore()}
              >
                Show more Projects
              </Button>
            </div>
          )}
        </div>
      </ProjectSection>
    </>
  )
}

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
  totalCount: PropTypes.number.isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
  selectOrderByField: PropTypes.func.isRequired
}
export default ProjectsList
